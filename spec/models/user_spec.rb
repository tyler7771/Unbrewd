require 'rails_helper'
require 'faker'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
  end


  describe 'associations' do
    it { should have_many(:ratings)}
  end

  describe 'model_methods' do
    describe '.find_by_credentials' do
      context 'when given correct credentials' do
        it 'should find the right user' do
          expect(User.find_by_credintials(user.username, user.password)).to eq(user)
        end
      end

      context 'when given incorrect password' do
        it 'should return password' do
          expect(User.find_by_credintials(user.username, '1234')).to eq('password')
        end
      end

      context 'when given a user that does not exist' do
        it 'should return nil' do
          expect(User.find_by_credintials('invalid_username', user.password)).to be_nil
        end
      end
    end
  end

  describe 'instance_methods' do
    describe "session token" do
      describe '#ensure_session_token' do
        it "assigns a session_token if one is not given" do
          expect(user.session_token).not_to be_nil
        end
      end

      describe '#reset_token!' do
        it 'resets the session token' do
          token = user.session_token
          expect(user.reset_token!).not_to eq(token)
        end
      end
    end

    describe "password" do
      describe '#password=' do
        it "encrypts password" do
          expect(user.password_digest).not_to eq(user.password)
        end
      end

      describe '#is_password?' do
        it 'returns true when password is correct' do
          token = user.session_token
          expect(user.is_password?(user.password)).to eq(true)
        end

        it 'returns false when password is correct' do
          token = user.session_token
          expect(user.is_password?('1234')).to eq(false)
        end
      end
    end
  end
end
