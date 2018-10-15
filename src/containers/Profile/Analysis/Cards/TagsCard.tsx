import * as React from 'react';

interface ITagsCardProps {
  tags: any;
}

const TagsCard = ({ tags }: ITagsCardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-">Tags</h5>
        {Object.keys(tags).map((key, index) => (
          <button type="button" key={index} disabled={true} className="btn btn-dark btn-sm m-1">
            {key} <span className="badge badge-light">{tags[key]}</span>
          </button>
        ))}
        <p className="card-text">
          <small className="text-muted">Tags are based on accepted submissions only</small>
        </p>
      </div>
    </div>
  );
};

export default TagsCard;
