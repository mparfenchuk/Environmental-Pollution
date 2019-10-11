import mongoose, { Schema, Document } from 'mongoose';

export interface IGeo extends Document {
  type: string
  geometry: {
    type: string
    coordinates: any
  },
  properties: {
    slug: string
    name: string
  }
}

const GeoSchema: Schema = new Schema({
  type: { type: String, default: 'Feature' },
  geometry: {
    type: { type: String, default: 'Point' },
    coordinates: Schema.Types.Mixed,
  },
  properties: {
    slug: String,
    name: String
  }
});

export default mongoose.models.Geo || mongoose.model<IGeo>('Geo', GeoSchema);