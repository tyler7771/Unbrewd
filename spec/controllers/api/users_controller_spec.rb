require 'rails_helper'
require 'faker'

RSpec.describe Api::UsersController, type: :controller do
  describe "Post #create" do
    let!(:user) { build(:user) }

    context "with invalid params" do
      it "should respond with 422" do
        post :create, user: {username: user.username, password: ""}
        should respond_with(422)
      end
    end

    context "with valid params" do
      before(:each) do
        post :create, user: {username: user.username, password: 'password'}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "Patch #update" do
    let!(:user) { create(:user, {id: 1}) }

    context "with invalid params" do
      it "should respond with 422" do
        patch :update, id: 1, user: {username: user.username, password: "3"}
        should respond_with(422)
      end
    end

    context "with valid params" do
      before(:each) do
        patch :update, id: 1, user: {cover_photo_url: 'www.example.com'}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "GET #show" do
    let!(:user) { create(:user, {id: 1}) }

    describe "returns json for user" do
      before(:each) do
        get :show, id: user, params: {}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end
end
