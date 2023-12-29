import { Schema, model, Types } from 'mongoose';

let collection = 'orders'
let schema = new Schema(
{
    type:{ type: String, required: true, enum: ['muzza', 'vegan', 'ham']},
    size:{ type: String, required: true },
    quantity:{ type: Number, required: true },
    price:{ type: Number, required: true },
    uuser_id:{type: Types.ObjectId, ref: "users", required:true }
},
{
    timestamps: true,
}
)

let Order = model(collection,schema)
export default Order