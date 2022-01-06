styles={
    {
        control: (base, state) => ({
            ...base,
            fontSize: '1.5em',
            border: '1px solid #d9d9d9',
            borderRadius: '0.3em',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#b3b3b3',
                animation: 'blink 1s infinite',
            },
            '&:focus': {
                borderColor: '#b3b3b3',
            },
            '&:keyframe blink': {
                0: {
                    opacity: 0.6
                },
                50: {
                    opacity: 1
                },
                100: {
                    opacity: 0.6
                }
            }
        }),
    }
}