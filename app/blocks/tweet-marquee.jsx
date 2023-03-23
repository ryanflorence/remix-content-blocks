export default function (props) {
  return (
    <div style={{ display: "flex" }}>
      {props.tweets.map((tweet, index) => (
        <div key={index}>
          <h3>{tweet.author}</h3>
          <div dangerouslySetInnerHTML={{ __html: tweet.content }} />
          <button
            onClick={() => {
              alert("arbitrary code execution");
            }}
          >
            Retweet
          </button>
        </div>
      ))}
    </div>
  );
}
