require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  describe "Post #create" do
    let!(:user) { create(:user) }

    context "with invalid username" do
      it "should respond with 404" do

        post :create, user: {username: nil, password: user.password}
        should respond_with(404)
      end
    end

    context "with invalid password" do
      it "should respond with 401" do

        post :create, user: {username: user.username, password: 'password'}
        should respond_with(401)
      end
    end

    context "with valid params" do
      before(:each) do
        post :create, user: {username: user.username, password: user.password}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template('api/users/show') }
    end
  end

  describe "Delete #destroy" do
    let!(:user) { create(:user) }

    context "when current_user" do
      let!(:current_user) { instance_double(User, :id => 1, username: user.username) }
      before(:each) do
        allow(controller).to receive(:current_user).and_return(current_user)
      end

      before(:each) do
        delete :destroy, id: 1, format: :json
      end

      it { should respond_with(200) }
      it "responds with JSON" do
        response.body == {}.to_json
      end
    end
  end
end
