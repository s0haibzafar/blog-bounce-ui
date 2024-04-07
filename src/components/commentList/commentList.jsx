
import styles from "./commentList.module.css"
import Comment from "../comment/comment";

function CommentList({ comments }) {
    return (
        <div className={styles.commentListWrapper}>
            <div className={styles.commentList}>
                {comments.length === 0
                    ?
                    (<div className={styles.noComments} >No Comment Posted</div>)
                    :
                    comments.map(comment => (
                        <Comment key={comment._id} comment={comment} />
                    ))
                }
            </div>

        </div>
    )

}

export default CommentList;