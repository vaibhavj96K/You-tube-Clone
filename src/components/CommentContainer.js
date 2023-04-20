import React from "react";

const commentsData = [
  {
    name: "Prachi talokar",
    text: "Awesome . I like it ...",
    replies: [],
  },
  {
    name: "Vaibhav Jadhav",
    text: "Awesome Content Love It!!",
    replies: [
      {
        name: "Vaibhav Jadhav",
        text: "Awesome Content Love It!!",
        replies: [
          {
            name: "Vaibhav Jadhav",
            text: "Awesome Content Love It!!",
            replies: [
              {
                name: "Vaibhav Jadhav",
                text: "Awesome Content Love It!!",
                replies: [
                  {
                    name: "Vaibhav Jadhav",
                    text: "Awesome Content Love It!!",
                    replies: [{}],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Prachi talokar",
    text: "Awesome . I like it ...",
    replies: [],
  },
  {
    name: "Vaibhav Jadhav",
    text: "Awesome Content Love It!!",
    replies: [
      {
        name: "Vaibhav Jadhav",
        text: "Awesome Content Love It!!",
        replies: [{}],
      },
    ],
  },
  {
    name: "Vaibhav Jadhav",
    text: "Awesome Content Love It!!",
    replies: [{}],
  },
  {
    name: "Vaibhav Jadhav",
    text: "Awesome Content Love It!!",
    replies: [{}],
  },
  {
    name: "Vaibhav Jadhav",
    text: "Awesome Content Love It!!",
    replies: [{}],
  },
  {
    name: "Vaibhav Jadhav",
    text: "Awesome Content Love It!!",
    replies: [{}],
  },
  {
    name: "Vaibhav Jadhav",
    text: "Awesome Content Love It!!",
    replies: [{}],
  },
  {
    name: "Vaibhav Jadhav",
    text: "Awesome Content Love It!!",
    replies: [{}],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="commentCard">
      <img
        alt="user"
        src="https://tse2.mm.bing.net/th?id=OIP.loKKNQfqb7LzxjKU7CRyiAHaHa&pid=Api&P=0"
      />
      <div className="commentList">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, ind) => (
    <div key={ind}>
      <Comment data={comment} />
      <div className="nestedComment">
        {/* <CommentList comments={comment.replies} /> */}
        <Comment data={comment} />
        <Comment data={comment} />
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <>
      <div className="mainComments">
        <h1>Comments:</h1>
        <CommentList comments={commentsData} />
      </div>
    </>
  );
};

export default CommentContainer;
