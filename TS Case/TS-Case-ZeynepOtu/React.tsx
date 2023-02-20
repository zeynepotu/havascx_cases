import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';

interface Props {}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface State {
  posts: Post[];
  filter: string;
}

class Input extends React.Component<Props, State> {
  state = {
    posts: [],
    filter: '',
  };

  getData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({ posts: data });
  };

  Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { posts, filter } = this.state;
    return (
      <div>
      <div className='container'>
        <Form>
          <Form.Group >
            <Form.Control
              type="text"
              placeholder="Filter data"
              value={filter}
              onChange={this.Change}
            />
            <Button className="mt-2"onClick={this.getData}>Tıkla</Button>
          </Form.Group> 
        </Form>
       </div>
        {posts
          .filter(post => post.body.includes(filter))
          .map(post => (
            <Card key={post.id} style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title >{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    );
  }
}

export default Input;