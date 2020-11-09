import uploadManager from './UploadManager'
export default class Upload {
    constructor(uploadType) {
        this.uploadType = uploadType
        this.uploadManager = new uploadManager()
    }

    delFile(id) {
        // this.uploadManager.setExternamState(id, this)
        if (this.fileSize < 3000) {
            return this.dom.parentNode.removeChild(this.dom)
        }
        if (window.confirm('确定？')) {
            return this.dom.parentNode.removeChild(this.dom)
        }
    }
}


