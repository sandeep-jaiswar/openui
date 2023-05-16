import loader from '../../assets/loader.gif';

type LoaderProps = {
    className?: string;
}

const Loader: React.FC<LoaderProps> = ({
    className,
}) => {
    return (
        <span className={`${className} loader grid place-content-center`}>
            <img src={loader} alt="Loading..." loading="lazy" width={64} className='width-full' />
        </span>
    );
};

export default Loader;