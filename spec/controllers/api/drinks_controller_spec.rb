require "rails_helper"

RSpec.describe Api::DrinksController, type: :controller do
  describe "GET #index" do
    let!(:drink_one) { create(:drink) }
    let!(:drink_two) { create(:drink) }
    let!(:drink_three) { create(:drink) }
    let!(:drink_four) { create(:drink) }

    describe "returns json for all drinks" do
      before(:each) do
        get :index, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:index) }
    end
  end
  #
  describe "GET #show" do
    let!(:drink) { create(:drink, {id: 1}) }

    describe "returns json for drink" do
      before(:each) do
        get :show, id: drink, params: {}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "Post #create" do
    let!(:drink) { build(:drink) }

    context "with invalid params" do
      it "should respond with 422" do
        post :create, drink: {description: drink.description}
        should respond_with(422)
      end
    end

    context "with valid params" do
      before(:each) do
        post :create, drink: {name: drink.name, roast_type: drink.roast_type, roaster_id: drink.roaster_id, description: drink.description}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "Patch #update" do
    let!(:drink) { create(:drink, {id: 1}) }
    let!(:drink2) { create(:drink) }

    context "with invalid params" do
      it "should respond with 422" do
        patch :update, id: 1, drink: {name: nil}
        should respond_with(422)
      end
    end

    context "with valid params" do
      before(:each) do
        patch :update, id: 1, drink: {name: drink2.name}, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end
  end

  describe "Delete #destroy" do
    let!(:drink) { create(:drink, {id: 1}) }

    context "when deleting" do
      before(:each) do
        delete :destroy, id: 1, format: :json
      end

      it { should respond_with(200) }
      it "responds with JSON" do
        response.body == drink.to_json
      end
    end
  end
end
