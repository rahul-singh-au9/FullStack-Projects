import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import {createPost, updatePost} from "../../actions/postsActions";

const Form = ({currentId, setCurrentId}) => {

    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: ""
    });

    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null );

    const classes = useStyles();

    useEffect(() => {
        if(post) setPostData(post)
    },[post]);

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: ""})
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if(currentId){

        dispatch(updatePost(currentId, postData));

      } else{

          dispatch(createPost(postData));

      }
      clear();
    };

    return (
      <Paper className={`${classes.paper} ${classes.root}`}>

        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h6"> {currentId ? "Editing" : "Creating"} a Memory</Typography>

          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value})}></TextField>

          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}
          onChange={(e) => setPostData({...postData, title: e.target.value})}></TextField>

          <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}
          onChange={(e) => setPostData({...postData, message: e.target.value})}></TextField>

          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}
          onChange={(e) => setPostData({...postData, tags: e.target.value})}></TextField>

          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
          </div>

          <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" type="submit" fullWidth> Submit </Button>

          <Button variant="contained" size="small" color="secondary" type="submit" onClick={clear} fullWidth> Clear </Button>

        </form>

      </Paper>
    )
}

export default Form;
