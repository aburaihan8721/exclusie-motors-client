import "./AddReview.css";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";

const AddReview = () => {
  const { user, success, setSuccess } = useAuth();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: `${user?.displayName}`,
      email: `${user?.email}`,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    // post review data to server
    axios.post("https://still-dawn-32083.herokuapp.com/reviews", data).then((res) => {
      console.log(res);
      if (res.data.acknowledged) {
        setSuccess(true);
        reset();
      }
    });
  };

  return (
    <div id="add-review-area">
      <div className="container">
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col-md-6">
            <div className="border border-dark p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center py-3 fw-bold">
                  Add Your <span className="text-info">Comments</span>
                </h2>

                <input
                  className="form-control mb-3"
                  {...register("name")}
                  defaultValue={user?.displayName}
                  disabled
                />
                <input className="form-control mb-3" {...register("email")} defaultValue={user?.email} disabled />
                <input className="form-control mb-3" {...register("review")} placeholder="Your Comment " />
                <input className="form-control mb-3" {...register("star")} placeholder="Rating (0-5)" />
                <input className="form-control mb-3" {...register("image")} placeholder="Add Your Photo" />
                <button className="form-control mb-3 btn btn-outline-info text-uppercase fw-bold" type="submit">
                  Submit
                </button>
              </form>

              {success && (
                <div className="alert alert-success" role="alert">
                  Car Added Successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
