import multer from 'multer';

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, 'assets/videos');
    },

    filename: (req,file,callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }     
});



const Multer_Video = multer({storage: storage}).single('video');
export default Multer_Video