export default ({
    url,
    target,
    rel,
}) => {
    const a = document.createElement('a')

    a.href = url
    rel && (a.rel = rel)
    target && (a.target = target)
    document.body.appendChild(a)
    
    return a
}