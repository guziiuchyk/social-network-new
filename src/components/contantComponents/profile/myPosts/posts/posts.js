import Post from "./post/post";


let posts = () => {
    let postsState = [
        {text: 'Lorem ipmet, consectetuorem ipsum dolor sit amet, consr adipisicing elit. Cum, maiores.'},
        {text: 'Lorem ipsum dolor sit amorem ipsum dolor sit amet, conset, r adipisicing elit. Cum, maiores.'},
        {text: 'Lorem ipmet, consectetur adipisicing elit. Cum, maiores.'},
        {text: 'Lorem ipmet, consectetur adorem ipsum dolor sit amet, consipisicing elit. Cum, maiores.'},
        {text: 'Lorem ipsum dolor sit amet, cons adipisicing elit. Cum, maiores'},
        {text: 'Lorem iporem ipsum dolor sit amet, conscing elit. Cum, maiores.'},
        {text: 'Lorem ifdsfsdfporem ipsum ddfsfsdfsdflit. Cum, maiordsfsdfsdes.'},
    ]

    let postsStateComponents = postsState.map((post) => <Post text={post.text} />)
    return(
        <div>
            {postsStateComponents}
        </div>
    )
};

export default  posts;