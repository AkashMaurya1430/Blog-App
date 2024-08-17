import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ProfileImageDropZone = ({ profileImage, setProfileImage }) => {
  const onDrop = useCallback((acceptedFiles) => {
    setProfileImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex items-center justify-center">
      <div
        {...getRootProps()}
        className={`w-28 h-28 p-[0.2rem] ${
          profileImage ? "border border-solid border-slate-400" : "border-2 border-dashed border-slate-400"
        } rounded-full flex items-center justify-center cursor-pointer`}
      >
        <input {...getInputProps()} />
        {profileImage ? (
          <img src={profileImage} alt="Uploaded" className="w-full h-full rounded-full object-cover" />
        ) : (
          <>
            <p className="text-center text-sm mt-1"> Profile</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileImageDropZone;
