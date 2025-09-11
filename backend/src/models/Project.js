import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: {
    type: String
  },
  techStack: [String],
  github: String,
  demo: String,
  image: String
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);
