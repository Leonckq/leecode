import Upload from './flyweight'

export default class UploadFactory {
    constructor() {
        this.createdFlyWeightObjs = {}
    }
    create (uploadType) {
        if (this.createdFlyWeightObjs[uploadType]) {
            return this.createdFlyWeightObjs[uploadType]
        }
        return this.createdFlyWeightObjs[uploadType] = new Upload(uploadType)
    }

}