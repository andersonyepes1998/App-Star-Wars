import Header from '../components/organisms/Header';

const getHeaderOptions = (
    transparentBackground = true,
    iconStart = true
) => ({
    header: () => (
        <Header
            transparentBackground={transparentBackground}
            iconStart={iconStart}
        />
    ),
});

export default getHeaderOptions;
