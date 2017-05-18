require 'rails_helper'

RSpec.describe Rating, type: :model do
  let!(:user) { create(:user, { id: 1 }) }
  let!(:user_two) { create(:user, { id: 2 }) }
  let!(:drink) { create(:drink, { id: 1 }) }
  let!(:rating_one) { FactoryGirl.create(:rating, { user_id: 1, drink_id: 2 }) }
  let!(:rating_two) { FactoryGirl.create(:rating, { user_id: 1, drink_id: 2 }) }
  let!(:rating_three) { FactoryGirl.create(:rating, { user_id: 1, drink_id: 2 }) }
  let!(:rating_four) { FactoryGirl.create(:rating, { user_id: 2, drink_id: 1 }) }
  let!(:rating_five) { FactoryGirl.create(:rating, { user_id: 2, drink_id: 1 }) }
  let!(:rating_six) { FactoryGirl.create(:rating, { user_id: 2, drink_id: 1 }) }

  describe 'validations' do
    it { should validate_presence_of(:drink_id) }
    it { should validate_presence_of(:user_id) }
  end

  describe 'associations' do
    it { should belong_to(:user)}
    it { should belong_to(:drink)}
  end

  describe 'model_methods' do
    describe '.find_by_params' do
      context 'when given no params' do
        it 'return all ratings' do
          ratings = [rating_one, rating_two, rating_three, rating_four, rating_five, rating_six]
          expect(Rating.find_by_params({})).to eq(ratings)
        end
      end

      context 'when given params' do
        it 'should return all ratings for user' do
          ratings = [rating_one, rating_two, rating_three]
          expect(Rating.find_by_params({type: 'user', id: 1})).to eq(ratings)
        end

        it 'should return all ratings for drink' do
          ratings = [rating_four, rating_five, rating_six]
          expect(Rating.find_by_params({type: 'drink', id: 1})).to eq(ratings)
        end
      end
    end

    describe '.index_with_params' do
      context 'when given no params' do
        it 'return all ratings' do
          ratings = [rating_one, rating_two, rating_three, rating_four, rating_five, rating_six]
          expect(Rating.index_with_params({})).to eq(ratings)
        end
      end

      context 'when given params' do
        it 'should return all ratings when asks for more than ammount' do
          expect(Rating.index_with_params({amount: 15}).length).to eq(6)
        end

        it 'should return number of reviews for ammount with no type param' do
          expect(Rating.index_with_params({amount: '3'}).length).to eq(3)
        end

        it 'should return number of reviews for ammount with type param' do
          expect(Rating.index_with_params({amount: '2', type: 'user', id: 1}).length).to eq(2)
        end
      end
    end

    describe '.statistics' do
      context 'drinks' do
        context 'when creating' do
          it 'returns initialized stats' do
            stats = {all: 0, user: 0, unique: 0, average_rating: 0, count: 0}
            expect(Rating.statistics({}, user, 'create')).to eq(stats)
          end
        end

        context 'when retrieving stats for drink' do
          let!(:stats) { Rating.statistics({type: 'drink', id: 1}, user, '') }

          it 'returns all review count' do
            expect(stats[:all]).to eq(3)
          end

          it 'returns unique review count' do
            expect(stats[:unique]).to eq(1)
          end

          it 'returns average review count' do
            avg = (rating_four.checkin_rating + rating_five.checkin_rating + rating_six.checkin_rating) / 3
            expect(stats[:average_rating]).to eq(avg)
          end

          it 'returns count' do
            expect(stats[:count]).to eq(3)
          end
        end
      end

      context 'users' do
        context 'when retrieving stats for user' do
          let!(:stats) { Rating.statistics({type: 'user', id: 1}, user, '') }

          it 'returns all review count' do
            expect(stats[:all]).to eq(3)
          end

          it 'returns unique review count' do
            expect(stats[:unique]).to eq(1)
          end
        end
      end
    end
  end
end
