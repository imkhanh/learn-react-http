import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            errorMsg: '',
        }
    }

    componentDidMount(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{this.setState({posts: res.data})})
        .catch(err=>{
            console.log(err) 
            this.setState({errorMsg: 'Error'})
        })
    }


    render() {
        const {posts, errorMsg } = this.state
        return (
            <div>
                List of posts
               {
                posts.map(post=>{ return <div key={post.id}>{post.title}</div> })
               }

               {
                   errorMsg ? <div>{errorMsg}</div> : null
               }
            </div>
        )
    }
}
