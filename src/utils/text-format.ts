

export const formatTime = (seconds: number): string => {
    try{
        if(seconds < 3600) return new Date(seconds * 1000).toISOString().substring(14, 19)
        return new Date(seconds * 1000).toISOString().slice(11, 19);
    } catch (e) {}
    return '';
};