import { openUploadWidget } from "../../utils/CloudinaryService";
import { cloudinaryExportPreset } from "../../config";
import { cloudinaryCloudName } from "../../config";

const CloudinaryUpload = () => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloudinaryCloudName,
        uploadPreset: cloudinaryExportPreset,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
            console.log(result.info.secure_url);
        }
        else{
            if(error){
              console.log(error);
            }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="bg-spotify-green rounded-full p-3 text-black font-bold text-sm" onClick={uploadImageWidget}>
      Upload Song
    </button>
  );
};

export default CloudinaryUpload;
