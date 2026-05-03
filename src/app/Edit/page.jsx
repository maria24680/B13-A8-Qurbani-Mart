'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { BiLoaderAlt } from 'react-icons/bi';

const EditProfilePage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

 
  useEffect(() => {
    if (session?.user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(session.user.name || '');
      setImage(session.user.image || '');
    }
  }, [session]);

 const handleUpdate = async () => {
  setIsUpdating(true);

 
  await authClient.updateUser({
    name: name,
    image: image,
  });

  
  await authClient.refreshSession();


  router.push('Profile');
  router.refresh();

  setIsUpdating(false);
};

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl w-full max-w-md shadow-xl space-y-6">
        <h1 className="text-2xl font-black text-slate-800">Edit Profile</h1>
        
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-slate-400 ml-1">Full Name</label>
            <input
              className="w-full border-2 border-slate-100 p-3 rounded-xl focus:border-sky-400 outline-none transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-slate-400 ml-1">Profile Image URL</label>
            <input
              className="w-full border-2 border-slate-100 p-3 rounded-xl focus:border-sky-400 outline-none transition-all"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={() => router.back()} 
            className="flex-1 bg-slate-100 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={isUpdating}
            className="flex-1 bg-sky-500 text-white py-3 rounded-xl font-bold disabled:opacity-50 flex items-center justify-center"
          >
            {isUpdating ? <BiLoaderAlt className="animate-spin" /> : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;