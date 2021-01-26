import InstallBox from '../installBox';

const Description = ({
    name,
    description,
    packageUrl='npm.org',
    installCommand,
    body,
    children,
    version= '0.1.0',
}) => (
    <div className={'container'}>
        <div className={'toolbar-container'}>
            <div className={'toolbar'}>
                <h5>V{ version }</h5>
            </div>
            <InstallBox
                className={'tabs'}
                packageName={installCommand}
                componentName={name}
                npmUrl={packageUrl}
            />
        </div>

        <h3>{ description }</h3>
        <p>
            { body }
        </p>
        { children }
    </div>
);

export default Description;
