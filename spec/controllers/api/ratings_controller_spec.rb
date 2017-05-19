require 'rails_helper'

RSpec.describe Api::RatingsController, type: :controller do
  describe "GET #index" do
    let!(:rating_one) { create(:rating) }
    let!(:rating_two) { create(:rating) }
    let!(:rating_three) { create(:rating) }
    let!(:rating_four) { create(:rating) }

    describe "returns json for all ratings" do
      before(:each) do
        get :index, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:index) }
    end
  end

  describe "GET #show" do
    let!(:rating) { create(:rating, {id: 1}) }

    describe "returns json for rating" do
      before(:each) do
        get :show, id: rating, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "Post #create" do
    let!(:rating) { build(:rating) }

    let!(:current_user) { instance_double(User, :id => 1) }
    before(:each) do
      allow(controller).to receive(:current_user).and_return(current_user)
    end

    context "with invalid params" do
      it "should respond with 422" do

        post :create, rating: {drink_id: nil}
        should respond_with(422)
      end
    end

    context "with valid params" do
      before(:each) do
        post :create, rating: {drink_id: rating.drink_id, user_id: rating.user_id}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "Patch #update" do
    let!(:rating) { create(:rating, {id: 1}) }
    let!(:rating2) { create(:rating) }

    context "with invalid params" do
      it "should respond with 422" do
        patch :update, id: 1, rating: {drink_id: nil}
        should respond_with(422)
      end
    end

    context "with valid params" do
      before(:each) do
        patch :update, id: 1, rating: {description: rating2.description}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "Delete #destroy" do
    let!(:rating) { create(:rating, {id: 1}) }

    context "when deleting" do
      before(:each) do
        delete :destroy, id: 1, format: :json
      end

      it { should respond_with(200) }
      it "responds with JSON" do
        response.body == rating.to_json
      end
    end
  end
end
