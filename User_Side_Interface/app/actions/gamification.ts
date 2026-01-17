import { db } from '@/lib/firebase'; 
import { doc, getDoc, setDoc } from 'firebase/firestore';

const LEVEL_THRESHOLDS = [
    { level: 1, reports: 0, title: "Citizen", reward: 0 },
    { level: 2, reports: 5, title: "Civic Observer", reward: 100 },
    { level: 3, reports: 10, title: "Neighborhood Watch", reward: 500 },
    { level: 4, reports: 25, title: "Community Guardian", reward: 1000 },
    { level: 5, reports: 50, title: "City Hero", reward: 2500 },
];

export async function updateUserGamification(userId: string) {
    if (!userId) return;

    const userRef = doc(db, "user_stats", userId);
    const userSnap = await getDoc(userRef);

    let stats = userSnap.exists() 
        ? userSnap.data() 
        : { totalReports: 0, coins: 0, level: 1, unlockedCertificates: [] };


    const newReportCount = (stats.totalReports || 0) + 1;
    let newCoins = (stats.coins || 0) + 50; 
    let newLevel = stats.level || 1;
    let newTitle = stats.rankTitle || "Citizen";
    let newCerts = stats.unlockedCertificates || [];

    const nextMilestone = LEVEL_THRESHOLDS.slice().reverse().find(t => newReportCount >= t.reports);

    if (nextMilestone && nextMilestone.level > newLevel) {
        newLevel = nextMilestone.level;
        newTitle = nextMilestone.title;
        newCoins += nextMilestone.reward; 
        if (!newCerts.includes(nextMilestone.title)) {
            newCerts.push(nextMilestone.title);
        }
    }

    await setDoc(userRef, {
        userId,
        totalReports: newReportCount,
        coins: newCoins,
        level: newLevel,
        rankTitle: newTitle,
        unlockedCertificates: newCerts,
        lastUpdated: new Date()
    }, { merge: true });

    return { newLevel, newCoins, newTitle };
}
