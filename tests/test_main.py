import unittest

from app import app


class TestMain(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def test_response(self):
        response = self.app.get("/")

        self.assertEquals(response.status_code, 200)


if __name__ == "__main__":
    unittest.main()
