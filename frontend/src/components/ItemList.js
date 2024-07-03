import React from "react";
import { format } from "date-fns";

const ItemList = ({ items, handleEdit, handleDelete }) => {
  return (
    <div className="list-group">
      {items.length === 0 ? (
        <p className="list-group-item">Not item found to display</p>
      ) : (
        <div className="list-group">
          {items.map((item) => (
            <div
              className="list-group-item list-group-item-action d-flex gap-3 py-3"
              key={item.id}
            >
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div className="d-flex flex-column">
                  <h5>{item.item}</h5>
                  <p className="text-muted mb-0">
                    {format(new Date(item.createdAt), "dd MMM, HH:mm")}
                  </p>
                </div>
                <div className="d-flex align-item-center mb-0 ">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
