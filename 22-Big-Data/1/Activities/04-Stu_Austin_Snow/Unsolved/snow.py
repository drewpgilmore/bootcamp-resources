from mrjob.job import MRJob


class snow_Days(MRJob):

    def mapper(self, key, line):
        (station, name, state, date, snow, tmax, tmin) = line.split(",")
        if snow and int(float(snow)) > 0:
            yield name, 1

    def reducer(self, date, snow):
        yield date, sum(snow)


if __name__ == "__main__":
    snow_Days.run()