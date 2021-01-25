const Description = ({ name, description, packageUrl, installCommand, body }) => (
    <div className={'container'}>
        <h3>{ description }</h3>
        { name && packageUrl && (
            <p className={'paragraph'} >
                Install <strong>{ name }</strong> as a <a className={'link'} href={packageUrl} target={'_blanc'}>package</a>
            </p>
        )}
        <code className={'code'} >
            { installCommand }
        </code>
        <p>
            { body }
        </p>
    </div>
);

export default Description;
