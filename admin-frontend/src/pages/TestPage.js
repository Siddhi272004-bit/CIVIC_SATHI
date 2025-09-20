// src/pages/TestPage.js

import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../lib/firebaseconfig";

const TestPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "reports"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reportsData = querySnapshot.docs.map(doc => doc.data());
      setData(reportsData);
      setLoading(false);
      console.log("Firestore connection successful! Data received:", reportsData);
    }, (error) => {
      console.error("Firestore connection failed:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Attempting to connect to Firebase...</div>;
  }

  return (
    <div>
      <h1>Test Page</h1>
      {data ? (
        <div>
          <p>Connection successful! Data count: {data.length}</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Failed to load data. Check console for errors.</p>
      )}
    </div>
  );
};

export default TestPage;