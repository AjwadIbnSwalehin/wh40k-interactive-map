function useStars(numStars: number) {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    stars.push(
      <div
        key={i}
        className="star"
        style={{ left: `${x}px`, top: `${y}px`, position: "absolute" }}
      />,
    );
  }
  return stars;
}

export default useStars;
