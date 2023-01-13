const useTopScroll = () => {

    const handleClick = () => {
        window[`scrollTo`]({top:0,behavior:`smooth`})
    }

    return {
        handleClick
    }
}

export default useTopScroll;