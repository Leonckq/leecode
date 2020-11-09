import UploadFactory from './UploadFactory'
export default class UploadManager {
    constructor() {
        this.uploadDatabase = {}
        this.UploadFactory = new UploadFactory()
    }
    add (id, uploadType, fileName, fileSize) {
        const flyWeightObj = this.UploadFactory.create(uploadType)
        const dom = document.createElement('div')
        dom.innerHTML = `<span>文件名称：${fileName},文件大小: ${fileSize}<span/>
            <button class="delFile">删除</button>
        `
        dom.querySelector('.delFile').onclick = () => {
            flyWeightObj.delFile(id)
        }
        document.body.appendChild(dom)

        this.uploadDatabase[id] = {
            fileName,
            fileSize,
            dom
        }
        return flyWeightObj
    }

    setExternamState(id, flyWeightObj) {
        const uploadData = this.uploadDatabase[id]
        Object.keys(uploadData).forEach(item => {
            flyWeightObj[item] = uploadData[item]
        })
    }
}