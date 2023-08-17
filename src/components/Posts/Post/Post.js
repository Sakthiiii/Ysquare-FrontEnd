import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { useDispatch } from "react-redux";

import {  deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.btn}>
     
      <Button
          style={{ color: "Green" }}
          size="large"
          color="secondary"
          onClick={() => setCurrentId(post._id)}
        > Edit
          <MoreHorizIcon fontSize="default" />
        </Button>
        <Button
        size="large"
        color="secondary"
        onClick={() => dispatch(deletePost(post._id))}
      >
        DELETE
        <DeleteIcon fontSize="small" />
      </Button>
        </div>
      <CardMedia
        className={classes.media}
        image={post.selectedFile || "https://i.stack.imgur.com/y9DpT.jpg"}
        title={post.title}
      />

      <div className={classes.overlay2}>
       
      </div>
      <div className={classes.details}></div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}></CardActions>
    </Card>
  );
};

export default Post;
