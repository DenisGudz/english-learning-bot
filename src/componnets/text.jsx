function TextComp(comps){
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Totam ab dicta sit quos quidem cupiditate, nisi optio veritatis odio aspernatur, \
impedit quibusdam laboriosam. Soluta a modi illo dolore veritatis suscipit.\
Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Totam ab dicta sit quos quidem cupiditate, nisi optio veritatis odio aspernatur, \
impedit quibusdam laboriosam. Soluta a modi illo dolore veritatis suscipit.\
Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Totam ab dicta sit quos quidem cupiditate, nisi optio veritatis odio aspernatur, \
impedit quibusdam laboriosam. Soluta a modi illo dolore veritatis suscipit.\
Lorem ipsum dolor sit amet consectetur adipisicing elit.\
'

    return(
        <p>
            {text.split(' ').map(word => {
                return (
                    <button>{word}</button>
                )
            })}
        </p>
    )
}


export default TextComp