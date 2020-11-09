import UploadManager from './UploadManager'
export default class StartUpload {
    constructor(){
        this.UploadManager = new UploadManager()
        this.id = 0
    }
    start (uploadType, files) {
        for(var i = 0, file; file = files[i++];) {
            this.UploadManager.add(++this.id, uploadType, file.fileName, file.fileSize)
        }
    }
}

const startUpload = new StartUpload()
startUpload.start('plugin', [
    {
        fileName: '1.txt',
        fileSize: 1000
    },
    {
        fileName: '2.html',
        fileSize: 3000
    },
    {
        fileName: '3.txt',
        fileSize: 5000
    }
])
startUpload.start('flash', [
    {
        fileName: '4.txt',
        fileSize: 1000
    },
    {
        fileName: '5.html',
        fileSize: 3000
    },
    {
        fileName: '6.txt',
        fileSize: 5000
    }
])