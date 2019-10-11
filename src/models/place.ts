import mongoose, { Schema, Document, Model } from 'mongoose';

interface Image {
  url: string
  reference: string
  alt: string
}

export interface IPlace extends Document {
  slug: string
  name: string
  definition: string
  description: string
  images: Array<Image>
}

export interface IModelPlace extends Model<IPlace> {
  doesntExist: (slug: string) => boolean; 
}

const PlaceSchema: Schema = new Schema({
  slug: { 
    type: String, 
    unique: true, 
    validate: {
      validator: (slug: string) => 
        mongoose.model<IPlace, IModelPlace>('Place', PlaceSchema).doesntExist(slug),
      
    }
  },
  name: String,
  definition: String,
  description: String,
  images: [{
    _id: false,
    url: String,
    reference: String,
    alt: String
  }]
});

PlaceSchema.statics.doesntExist = async function (slug: string) {
  return await this.where({ slug }).countDocuments() === 0
}

export default mongoose.models.Place || 
  mongoose.model<IPlace, IModelPlace>('Place', PlaceSchema);