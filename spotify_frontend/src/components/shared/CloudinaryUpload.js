import { openUploadWidget } from "../../utils/CloudinaryService";
import { cloudinaryExportPreset } from "../../config";
import { cloudinaryCloudName } from "../../config";

const CloudinaryUpload = ({setUrl, setName}) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloudinaryCloudName,
        uploadPreset: cloudinaryExportPreset,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
            setUrl(result.info.secure_url);
            setName(result.info.original_filename);
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
    <button className="bg-spotify-green rounded-full p-3 text-black font-semibold text-sm" onClick={uploadImageWidget}>
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
