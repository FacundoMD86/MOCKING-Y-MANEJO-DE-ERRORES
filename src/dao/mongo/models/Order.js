import { Schema, model, Types } from 'mongoose';
import  paginate  from 'mongoose-paginate-v2';

let collection = 'orders'
let schema = new Schema(
{
    type:{ type: String, required: true, enum: ["caño", "accesorio", "llave de paso"]},
    size:{ type: Number, required: true },
    quantity:{ type: Number, required: true },
    price:{ type: Number, required: true },
    user_id:{type: Types.ObjectId, ref: "users", required:true }
},
{
    timestamps: true,
}
);
schema.plugin(paginate)
let Order = model(collection,schema)
export default Order