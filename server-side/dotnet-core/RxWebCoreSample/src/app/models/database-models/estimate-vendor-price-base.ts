import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class EstimateVendorPriceBase {

//#region estimateVendorPriceId Prop
        @prop()
        estimateVendorPriceId : number;
//#endregion estimateVendorPriceId Prop


//#region estimateVendorId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        estimateVendorId : number;
//#endregion estimateVendorId Prop


//#region estimateSpecUnitQuantityId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        estimateSpecUnitQuantityId : number;
//#endregion estimateSpecUnitQuantityId Prop


//#region price Prop
        @required()
        price : number;
//#endregion price Prop


//#region createdBy Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        createdBy : number;
//#endregion createdBy Prop


//#region createdDateTime Prop
        @required()
        createdDateTime : any;
//#endregion createdDateTime Prop


//#region updatedBy Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        updatedBy : number;
//#endregion updatedBy Prop


//#region updatedDateTime Prop
        @required()
        updatedDateTime : any;
//#endregion updatedDateTime Prop





}