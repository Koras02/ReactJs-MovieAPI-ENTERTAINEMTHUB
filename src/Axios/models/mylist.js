// 찜하기 
import mongoose, {Schema} from 'mongoose'

const MylistSchema = new Schema(
    {
        contentId : {
            type: String,
        },
        isMovie:{
            type: Boolean,
        },
        userInfo: {
            type: Schema.Types.ObjectId,
            ref:'User',
        },
    },
    { timestamps: true }
);

const MyList = mongoose.modal('mylist', MylistSchema);

export default MyList;