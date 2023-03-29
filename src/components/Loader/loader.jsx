import {Vortex} from 'react-loader-spinner'

export default function Loader() {
        return (
            <Vortex
                visible={true}
                height="120"
                width="120"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        );
}