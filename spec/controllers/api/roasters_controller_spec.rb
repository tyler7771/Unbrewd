require 'rails_helper'

RSpec.describe Api::RoastersController, type: :controller do
  describe "GET #index" do
    let!(:roaster_one) { create(:roaster) }
    let!(:roaster_two) { create(:roaster) }
    let!(:roaster_three) { create(:roaster) }
    let!(:roaster_four) { create(:roaster) }

    describe "returns json for all roasters" do
      before(:each) do
        get :index, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:index) }
    end
  end

  describe "GET #show" do
    let!(:roaster) { create(:roaster, {id: 1}) }

    describe "returns json for roaster" do
      before(:each) do
        get :show, id: roaster, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "Post #create" do
    let!(:roaster) { build(:roaster) }

    context "with invalid params" do
      it "should respond with 422" do

        post :create, roaster: {name: nil}
        should respond_with(422)
      end
    end

    context "with valid params" do
      before(:each) do
        post :create, roaster: {name: roaster.name}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end
end
