"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { db } from "@/lib/firebaseconfig";
import { collection, query, where, onSnapshot, writeBatch, doc } from "firebase/firestore";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle } from "lucide-react";

export function StatusNotification() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [resolvedIds, setResolvedIds] = useState<string[]>([]);

  useEffect(() => {
    if (!user) return;

    // Listen for reports that are Resolved BUT user has not been notified yet
    // Note: We check for 'userNotified' not being true (it might be false or undefined)
    const q = query(
      collection(db, "reports"),
      where("userId", "==", user.uid),
      where("status", "==", "resolved"),
      where("userNotified", "!=", true) 
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ids: string[] = [];
      snapshot.forEach((doc) => {
        ids.push(doc.id);
      });

      // If we find any un-notified resolved reports, show the popup
      if (ids.length > 0) {
        setResolvedIds(ids);
        setOpen(true);
      }
    });

    return () => unsubscribe();
  }, [user]);

  const handleClose = async () => {
    setOpen(false);

    // Update these reports in Firebase so the popup doesn't show again
    if (resolvedIds.length > 0) {
        const batch = writeBatch(db);
        resolvedIds.forEach((id) => {
            const docRef = doc(db, "reports", id);
            // We add a new field 'userNotified' to the report
            batch.update(docRef, { userNotified: true });
        });
        await batch.commit();
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md mx-auto rounded-xl border-green-200">
        <AlertDialogHeader className="flex flex-col items-center text-center">
          <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
             <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <AlertDialogTitle className="text-xl text-green-800">Issue Resolved!</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 mt-2 text-center">
            {resolvedIds.length === 1 
              ? "Great news! One of your reported civic issues has been successfully resolved by the authorities." 
              : `Great news! ${resolvedIds.length} of your reported issues have been resolved by the authorities.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center mt-4">
          <AlertDialogAction 
            onClick={handleClose} 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            Awesome, Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
          }
