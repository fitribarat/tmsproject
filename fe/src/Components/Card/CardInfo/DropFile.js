import './DropFile.css';

import DropFileInput from './DropFileInput';

function DropFile() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default DropFile;
