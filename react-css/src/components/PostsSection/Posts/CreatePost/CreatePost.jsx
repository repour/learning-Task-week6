import './CreatePost.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 6px;
    font-size: 12px;
    border: none;
    display: flex;
    padding: 2px;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    cursor: pointer;
`
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1rem;
`

const CreatePost = props => {
    const [formData, setFormData] = useState({
        'postPhoto': './PostsSection/CreatePost/Profile.svg',
        'postName': 'Chandan S',
        'postDate': 'now',
        'postContent': '',
        'postMedia':''
    })


    const onChangeHandler = (evt) => {
        const value = evt.target.value;
        setFormData({
            ...formData,
            [evt.target.name]: value,
        })

    }
    const handleAddPost = () => {
        if (formData.postContent) {
            props.addPost(
                formData.postContent,
                formData.postMedia
            )
        } else {
            return 
        }

    }
    return (
        <div className='add-post-item'>
            <Div className='form-control'>
                <img src={formData.postPhoto} alt="profile-img" />
                <input name='postContent' value={formData.postContent} placeholder='What’s on your mind?' onChange={onChangeHandler} />
            </Div>

            <div className='form-action'>
                <Div className="icons">
                    <Button><img src="./PostsSection/CreatePost/01.svg" alt="icon1" /></Button>
                    <Button><img src="./PostsSection/CreatePost/02.svg" alt="icon2" /></Button>
                    <Button><img src="./PostsSection/CreatePost/03.svg" alt="icon3" /></Button>
                </Div>
                <button type="button" onClick={handleAddPost}>Create a post</button>
            </div>

        </div>
    )
}

CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default CreatePost