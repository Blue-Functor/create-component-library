import copy from 'copy-to-clipboard';

const TabPanel = ({
    componentName,
    packageUrl,
    packageName,
}) => (
    <>
        <p className={'paragraph'} >
            Install <strong>{ componentName }</strong> as a <a className={'link'} href={packageUrl} target={'_blanc'}>package</a>
        </p>
        <div>
            <div className={'code'} >
                { packageName }
            </div>
            <button onClick={() => copy(packageName)} className={'copy-button'}>Copy</button>
        </div>
    </>
);

const InstallBox = ({
    className,
    packageName,
    componentName,
    packageUrl,
}) => (
    <div className={`tabset ${className}`}>
        <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked />
        <label htmlFor="tab1">
            <div className="logo-container">
                <img
                    className="tab-img-npm"
                    src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/classic/npm-2009.png"
                />
            </div>
        </label>
        <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
        <label htmlFor="tab2">
            <div className="logo-container">
                <img className="tab-img-yarn"
                     src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-title.png"
                />
            </div>
        </label>

        <div className="tab-panels">
            <section id="npm" className="tab-panel">
                <TabPanel
                    {...{
                        componentName,
                        packageUrl,
                        packageName: `npm install ${ packageName }`,
                    }}
                />
            </section>
            <section id="yarn" className="tab-panel">
                <TabPanel
                    {...{
                        componentName,
                        packageUrl,
                        packageName: `yarn add ${ packageName }`,
                    }}
                />
            </section>
        </div>
    </div>
);


export default InstallBox;
