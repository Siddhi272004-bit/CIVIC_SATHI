// // app/api/upload/route.ts

// import { put } from '@vercel/blob';
// import { NextResponse } from 'next/server';

// export async function POST(request: Request): Promise<NextResponse> {
//     try {
//         const formData = await request.formData();
//         const file = formData.get('file');

//         if (!file || typeof file === 'string') {
//             return NextResponse.json({ error: 'No file provided or file is not a Blob.' }, { status: 400 });
//         }

//         const filename = (file as File).name;

//         // Use the put function to upload the file
//         const blob = await put(filename, file, {
//             access: 'public',
//             // --- ADD THIS LINE ---
//             addRandomSuffix: true,
//             // ---------------------
//         });
        
//         return NextResponse.json(blob);

//     } catch (error) {
//         console.error('Error handling file upload:', error);
//         return NextResponse.json(
//             { error: (error as Error).message },
//             { status: 500 },
//         );
//     }
// }

// app/api/upload/route.ts

import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const formData = await request.formData();
        const file = formData.get('file');
        // Retrieve the location we sent from the frontend
        const location = formData.get('location') as string || "Unknown Location";

        if (!file || typeof file === 'string') {
            return NextResponse.json({ error: 'No file provided or file is not a Blob.' }, { status: 400 });
        }

        const fileObj = file as File;
        const filename = fileObj.name;

        console.log(`[UPLOAD] Processing image: ${filename} | Location: ${location}`);

        // 1. Convert the File to a Buffer so Sharp can read it
        const arrayBuffer = await fileObj.arrayBuffer();
        const inputBuffer = Buffer.from(arrayBuffer);

        // 2. Get Metadata (we need width to make the watermark fit)
        const metadata = await sharp(inputBuffer).metadata();
        const width = metadata.width || 800;
        
        // Resize very large images to save processing time/storage (max width 1000px)
        const resizeWidth = width > 1000 ? 1000 : width;

        // 3. Generate Timestamp
        const timestamp = new Date().toLocaleString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short'
        });

        // 4. Create the Watermark SVG
        // A semi-transparent black bar at the bottom with white text
        const textObj = `VERIFIED: ${timestamp} | GPS: ${location}`;
        
        const svgOverlay = `
        <svg width="${resizeWidth}" height="50">
            <style>
            .bg { fill: rgba(0, 0, 0, 0.6); }
            .text { fill: #fff; font-size: 18px; font-family: sans-serif; font-weight: bold; }
            </style>
            <rect x="0" y="0" width="${resizeWidth}" height="50" class="bg" />
            <text x="10" y="32" class="text">${textObj}</text>
        </svg>
        `;

        // 5. Apply the Watermark
        const processedImageBuffer = await sharp(inputBuffer)
            .resize({ width: resizeWidth }) // Resize image first
            .composite([
                {
                    input: Buffer.from(svgOverlay),
                    gravity: 'south', // Position at the bottom
                },
            ])
            .jpeg({ quality: 80 }) // Compress to JPEG for faster loading
            .toBuffer();

        // 6. Upload the PROCESSED Buffer to Vercel Blob
        // Note: We are uploading 'processedImageBuffer', NOT the original 'file'
        const blob = await put(filename, processedImageBuffer, {
            access: 'public',
            addRandomSuffix: true,
            contentType: 'image/jpeg', 
        });
        
        console.log(`[UPLOAD] Success: ${blob.url}`);
        return NextResponse.json(blob);

    } catch (error) {
        console.error('Error handling file upload:', error);
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 500 },
        );
    }
}
